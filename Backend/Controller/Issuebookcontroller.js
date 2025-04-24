const Issue = require("../Model/Issuebook");
const Books = require("../Model/bookauth");

exports.createIssue = async (req, res) => {
  try {
    const { Roll_No, SBIN } = req.body;

    // ✅ Validate SBIN now that it's extracted
    if (typeof SBIN !== "string" || !SBIN.trim()) {
      return res.status(400).send("SBIN must be a valid string.");
    }

    // 1. Check if student already has 4 books issued
    const count = await Issue.countDocuments({ Roll_No });
    if (count >= 4) {
      return res.status(400).send("This student has already issued 4 books.");
    }

    // 2. Find the book by SBIN (trim just in case)
    const book = await Books.findOne({ ISBN: SBIN.trim() });
    if (!book) {
      return res.status(404).send("Book not found.");
    }

    // 3. Check if copies are available
    if (book.No_of_copies <= 0) {
      return res.status(400).send("No copies left of this book.");
    }

    // 4. Issue the book
    const newIssue = new Issue(req.body);
    await newIssue.save();

    // 5. Decrease the number of copies
    book.No_of_copies -= 1;
    await book.save();

    return res.status(200).send(newIssue);
  } catch (err) {
    console.error("Error in issuing book:", err);
    return res.status(500).send(err.message);
  }
};







exports.getIssuebook = async (req, res) => {

    try{
        const books = await Issue.find()
        res.send(books)
    }catch(err){
        res.status(500).send(err.message)
    }
  
};

exports. deleteIssuebook = async(req, res)=>{

  try{
    const issue = await Issue.findById(req.params.id);
    if(!issue) return res.status(404).send("Issue not found");
    // No_of_coipies Update
    const book = await Books.findOne({ ISBN: issue.SBIN.trim() });
    if (!book) return res.status(404).send("Book not found");
    
    book.No_of_copies += 1;
    await book.save();


    // Delete Issue Book
    await Issue.findByIdAndDelete(req.params.id);
    return res.status(200).send("Issue deleted successfully!")
  }
  catch(err){
    return res.status(500).send(err.message)
  }

}