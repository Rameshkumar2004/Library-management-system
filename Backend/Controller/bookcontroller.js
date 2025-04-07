const Books = require("../Model/bookauth");

// exports.createBook = async (req, res) => {
//   try {
    
//     const user = new Books(req.body);
//     await user.save();
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// };

exports.createBook = async (req, res) => {
  try {
    const newBook = new Books(req.body);
    await newBook.save();
    return res.status(201).json(newBook);
  } catch (err) {
   return res.status(500).json({ message: err.message });
  }
};


exports.getAllBook = async (req, res) => {

    try{
        const books = await Books.find()
        res.send(books)
    }catch(err){
        res.status(500).send(err.message)
    }
  
};


exports.getSBINById = async(req, res) =>{
   try{

    const book = await Books.findById(req.params.id)
    if(!book) return res.status(404).send("Book not found");

    
   return res.status(200).send(book)
   }catch(err){
    return res.status(500).send(err.message)
   }
}

exports.updateBook = async(req, res)=>{
  try{
  
    const book = await Books.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
    if(!book) return res.status(404).send("Book not found");
    return res.status(200).send(book)
  } catch(err){
    return res.status(404).send(err.message)
  }
  
  
}


exports.deleteBook = async(req, res)=>{

  try{
    const book = await Books.findByIdAndDelete(req.params.id);
    if(!book) return res.status(404).send("Book not found");

    return res.status(200).send("Book deleted successfully!")
  }
  catch(err){
    return res.status(500).send(err.message)
  }

}
