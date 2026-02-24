import Profesori from "../models/Profesori.entity.js";

const ProfesoriController = {
    async createProfesori(req,res){
        try{
          const newProfesori = await Profesori.create(req.body);
          return res.status(201).json(newProfesori)
        }catch(error){
            return res.status(500).json({error:error.message});
        }
    },

    async getProfesors (req,res){
        try{
            const Profesors = await Profesori.findAll();
            return res.status(200).json(Profesors);
        }catch(error){
          return res.status(500).json({error:error.message});
        }
    },
     
    async getProfesorsById (req,res){
        const {id}= req.params;
        try{
            const ProfesoriRecord = await Profesori.findByPk(id);
            if(!ProfesoriRecord){
                return res.status(404).json({message:"Profesori not found"});
            }
          return res.status(200).json(ProfesoriRecord);
        }catch(error){
          return res.status(500).json({error:error.message});
        }
    },

    async updateProfesori(req,res){
        const {id}=req.params;
        const {body}= req;
        try{
          const [updatedRowsCount, updatedProfesori] = await Profesori.update(
            body,
            {
                where: {id},
                returning: true,
            }
          );
          if(updatedRowsCount === 0){
            return res.status(404).json({message:"Profesori not found"})
          }
          return res.status(201).json(updatedProfesori[0]);
        }catch(error){
          return res.status(500).json({error:error.message});
        }

    },
    async deleteProfesori(req,res){
        const {id}=req.params;
        try{
         const deletedRowsCount = await Profesori.destroy({ where: { id } });
            if(deletedRowsCount === 0){
                return res.status(404).json({message:"Profesori not found"});
            }
            return res.status(204).end();
        }catch(error){
            return res.status(500).json({error:error.message});
        }

    },

};

export default ProfesoriController;