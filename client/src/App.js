import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import CompanyInterviews from "./pages/CompanyPages/Interviews";
import CompanyJobs from "./pages/CompanyPages/Jobs";
import CompanyDashboard from "./pages/CompanyPages/Dashboard";
import CompanyProfile from "./pages/CompanyPages/Profile";
import CompanyAnalyticsOverview from "./pages/CompanyPages/Analytics/Overview";
import JobsShow from "./pages/CompanyPages/Jobs/Show";
import CompanyShow from "./pages/CompanyPages/CompanyShow";
import CompanyJobsCreate from "./pages/CompanyPages/Jobs/Create";
import MyProfile from "./pages/UserPages/MyProfile";
import SavedJobs from "./pages/UserPages/SavedJobs";
import AppliedJobs from "./pages/UserPages/AppliedJobs";
import LikedJobs from "./pages/UserPages/LikedJobs";
import ResetPassword from "./pages/ResetPassword";
import ConfirmAccount from "./pages/ConfirmAccount/ConfirmAccount";
import ApplicantList from "./pages/CompanyPages/ApplicantList";
import CheckoutSuccess from "./pages/Pricing/CheckoutSuccess";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import CareerAdvice from "./pages/CareerAdvice/CareerAdvice";
import ResumeHelp from "./pages/ResumeHelp/ResumeHelp";
import ResumeExample from "./pages/ResumeHelp/ResumeExample";
import Salary from "./pages/Salary/Salary";
import FindJobs from "./pages/FindJobs/FindJobs";
import CreateInterview from "./components/CompanyComponents/Jobs/InterviewList/CreateInterview";
import useScrollToTop from "./components/useScrollToTop";
import InterviewList from "./pages/CompanyPages/InterviewList";
import InsertExplorer from "./pages/DetyraLab2/insertExplorer";
import InsertExpedition from "./pages/DetyraLab2/insertExpedition";
import ShowEXPs from "./pages/DetyraLab2/showEXPs";
import ShowEXPshqiptar from "./pages/DetyraLab2/showEXPshqiptar";
import DeleteExplorers from "./pages/DetyraLab2/deleteExplorers";
import InsertShtator from "./pages/MOD/insertShtator";
import InsertShtatorref from "./pages/MOD/insertShtatorref";
import ShowShtators from "./pages/MOD/showShtators";
import ShowTodayContracts from "./pages/MOD/showTodayContracts";
import ShowContractsOfEmployees from "./pages/MOD/showContractsOfEmployees";
import UpdateShtatorref from "./pages/MOD/updateShtatorref";
import ShtatorAndShtatorref from "./pages/LG/ShtatorAndShtatorref";
import CRUDSS from "./pages/Prova/crudss";
import CRUDS from "./pages/BotuesitRevistat/cruds";
import Lokacion from "./pages/BotuesitRevistat/lokacion";
import FestivaletEventet from "./pages/FestivaletEventet/FestivaletEventet";
import AutoriBook from "./pages/AutoriBook/AutoriBook";


function App() {
  useScrollToTop();
  const [userData, setUserData] = useState([]);
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const location = useLocation(); // Add this line to use the location hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const responseData = await response.json();
          setUserData(responseData);
          setIsLoggedOut(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {location.pathname !== "/reset-password" &&
        location.pathname !== "/confirm-account" && (
          <Header
            userData={userData}
            setUserData={setUserData}
            isLoggedOut={isLoggedOut}
            setIsLoggedOut={setIsLoggedOut}
          />
        )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile/detail"
          element={<MyProfile userData={userData} />}
        />
        <Route
          path="/profile/saved-jobs"
          element={<SavedJobs userData={userData} />}
        />
        <Route
          path="/profile/applied-jobs"
          element={<AppliedJobs userData={userData} />}
        />
        <Route
          path="/profile/liked-jobs"
          element={<LikedJobs userData={userData} />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-account" element={<ConfirmAccount />} />

        <Route path="/insert-explorer" element={<InsertExplorer />} />
        <Route path="/insert-expedition" element={<InsertExpedition />} />
        <Route path="/showEXPs" element={<ShowEXPs />} />
        <Route path="/showEXPshqiptar" element={<ShowEXPshqiptar />} />
        <Route path="/deleteExplorers" element={<DeleteExplorers />} />

        <Route path="/insert-shator" element={<InsertShtator />} />
        <Route path="/insert-shtatorref" element={<InsertShtatorref />} />
        <Route path="/showShtators" element={<ShowShtators />} />
        <Route path="/showTodayContracts" element={<ShowTodayContracts />} />
        <Route
          path="/showContractsOfEmployees"
          element={<ShowContractsOfEmployees />}
        />
        <Route path="/updateShtatorref" element={<UpdateShtatorref />} />

        <Route
          path="/shtatorAndShtatorref"
          element={<ShtatorAndShtatorref />}
        />
        <Route path="/CRUDSS" element={<CRUDSS/>} />


        <Route path="/CRUDS" element={<CRUDS/>} />
        <Route path="/Lokacion" element={<Lokacion/>} />

        <Route path="/success" element={<CheckoutSuccess />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact userData={userData} />} />
        <Route path="/career-advice" element={<CareerAdvice />} />
        <Route path="/resume-help" element={<ResumeHelp />} />
        <Route path="/resume-example" element={<ResumeExample />} />
        <Route path="/salary-tools" element={<Salary />} />

        <Route
          path="/find-jobs"
          element={
            !isLoggedOut ? <FindJobs userData={userData} /> : <FindJobs />
          }
        />

        <Route
          path="/company/dashboard"
          element={<CompanyDashboard userData={userData} />}
        />
        <Route
          path="/company/profile"
          element={<CompanyProfile userData={userData} />}
        />
        <Route
          path="/company/jobs"
          element={<CompanyJobs userData={userData} />}
        />
        <Route
          path="/company/interviews"
          element={<CompanyInterviews userData={userData} />}
        />
        <Route
          path="/company/createinterview/:id"
          element={<CreateInterview userData={userData} />}
        />
        <Route
          path="/company/interviewlist/:id"
          element={<InterviewList userData={userData} />}
        />
        <Route
          path="/company/applicantlist/:id"
          element={<ApplicantList userData={userData} />}
        />

        <Route
          path="/company/analytics"
          element={<CompanyAnalyticsOverview userData={userData} />}
        />

        <Route
          path="/company/jobs/create"
          element={<CompanyJobsCreate userData={userData} />}
        />
        <Route
          path="/jobs/show/:id"
          element={<JobsShow userData={userData} />}
        />

        <Route
          path="/company/show/:id"
          element={<CompanyShow userData={userData} />}
        />

        <Route
          path="/FestivaletEventet"
          element={<FestivaletEventet />}
        />
        <Route
          path="/AutoriBook"
          element={<AutoriBook/>}
        />
        


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
