module.exports = mongoose => {

    var schema = mongoose.Schema(
  
   
  
      {
  
        name: String,
  
        description: String,
  
        published:Boolean,
  
        category: String
  
      },
  
       
  
    );
  
   
  
   
  
    schema.method("toJSON", function() {
  
      const { __v, _id, ...object } = this.toObject();
  
      object.id = _id;
  
      return object;
  
    });
  
   
  
    const  Products = mongoose.model("books", schema);
  
    return Products;
  
  };