class CategoryController
{
    constructor()
    {
        this.categoryService = new CategoryService();
    }
    
    // DATAController
    getAllCategory()
    {
        return this.categoryService.getAllCategory();
    }
    
    //ViewController
    getAllCategoryView()
    {
        
        var data=this.getAllCategory();
        var result="<div class='btn-group-vertical'>";
        for(var i=0; i<data.length;i++)
        {
            var id=data[i].id;
            var name=data[i].name;
            result += "<button onclick='categoryClick(" + id+ ")' type='button' class='btn btn-default'>"+ name +"</button>";
        }
        result+="</div>";
        var element =document.getElementById("category");
        element.innerHTML = result;
    }
    
    
}


