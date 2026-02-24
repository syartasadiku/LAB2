import Lenda from "../models/Lenda.entity.js";

const LendaController = {
    async createLenda (req,res){

        try{
         const newLenda = await Lenda.create(req.body);
         return res.status(201).json(newLenda);
        }catch(error){
         return res.status(500).json({error:error.message});
        }
    },

    async getLendet(req,res){
        try{
           const Lendet = await Lenda.findAll();
           return res.status(200).json(Lendet);
        }catch(error){
           return res.status(500).json({error:error.message});
        }
    },

    async getLendetById (req,res){
        const {id}= req.params;
        try{
        const LendaRecord = await Lenda.findByPk(id);
        if(!LendaRecord){
            return res.status(404).json({message:"Lenda not found"})
        }
        return res.status(200).json(LendaRecord);
        }catch(error){
            return res.status(500).json({error:error.message});
        }
    },

    async updateLenda (req,res){
        const {id}=req.params;
        const{body}=req;
        try{
          const [updatedRowsCount,updatedLenda]= await Lenda.update(
                body,
                {
                    where:{id},
                    returning:true,
                }
            );
            if(updatedRowsCount===0){
              return res.status(404).json({message:"Lenda not found"});
            }
            return res.status(200).json(updatedLenda[0]);
        }catch(error){
            return res.status(500).json({error:error.message});
        }

    },

    async deleteLenda (req,res){
        const {id}=req.params;
        try{
          const deletedRowCount = await Lenda.destroy({where:{id}});
          if(deletedRowCount === 0){
            return res.status(404).json({message:"Lenda not found"});
          }
          return res.status(204).end();

        }catch(error){
            return res.status(500).json({error:error.message});
        }
    },
};

export default LendaController;