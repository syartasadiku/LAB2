import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import sequelize from "./config/sequelize.mjs";
import mongooseConnection from "./config/mongoose.js";

import * as Models from "./config/importsForModels.js";
import * as Routes from "./config/importsForRoutes.js";

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});
AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
dotenv.config({ path: "../.env" });
console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password",
};

const authenticate = async ({ email, password }, ctx) => {
  try {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return DEFAULT_ADMIN;
    }

    const company = await Models.Company.findOne({ where: { email } });

    if (company) {
      const passwordMatch = await argon2.verify(company.password, password);

      if (!passwordMatch) {
        return null;
      }
      ctx.res.redirect("http://localhost:3000/company/dashboard");
      return company;
    }

    const user = await Models.User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      return null;
    }

    if (user.role === "User") {
      ctx.res.redirect("http://localhost:3000/profile/detail");
    }

    return user;
  } catch (error) {
    console.error("Error authenticating user:", error);
    return null;
  }
};

const userUploadPath = (record, filename) => {
  return `${record.params.UserId}/${filename}`;
};

const companyUploadPath = (record, filename) => {
  return `${record.params.CompanyID}/${filename}`;
};

const unlinkFileFromStorage = async (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      console.log(`File unlinked: ${filePath}`);

      const directoryPath = path.dirname(filePath);

      const filesInDirectory = await fs.promises.readdir(directoryPath);
      if (filesInDirectory.length === 0) {
        await fs.promises.rmdir(directoryPath);
        console.log(`Directory deleted: ${directoryPath}`);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error unlinking file: ${filePath}`, error);
    throw error;
  }
};
