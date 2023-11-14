export const test = async (req,res) =>{
    try{
        res.json({text:'hello world'})
    }catch (e){
        console.log(e)
    }
}