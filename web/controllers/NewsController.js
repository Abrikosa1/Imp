class NewsController
{
    constructor()
    {
        this.newsService = new NewsService();
    }
    
    // DATAController
    getNewsById(id)
    {
        return this.newsService.getNewsById(id);
    }
    
    //ViewController
   getNewsByIdView2(id)  {
        var data=this.getNewsById(id);
        var result="";
            var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date=data.date;
            var image=data.image;
            alert(data.title);
            result +=  "<div class='row' onclick='newsClick("+ id  +")'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail'>"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+shortDescription+"</p>"+
                              "<p align='right'>"+date+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        var element =document.getElementById("news");
        element.innerHTML = result;
    }
    getLastNews()  {
        var data = this.getAllNews();
        var last_id=data.length;
        var last_prev_id=data.length - 1;
        var data2=this.getNewsById(last_id);
            var title=data2.title;
            var shortDescription=data2.shortDescription;
            var image=data2.image;
            var data3=this.getNewsById(last_prev_id);
            var title2=data3.title;
            var shortDescription2=data3.shortDescription;
            var image2=data3.image;
            var result="";
            result +="<div class='news-blog'>"+
                    "<img src='data:image/png;base64,"+ image +"' width='100%'/>"+
                    "<div class='caption'>"+
                                            "<h6><a onclick='newsClick("+ last_id  +")' href='#'>"+title+"</a></h6>"+
                                            "<p>"+shortDescription+"</p>"+
                                        "</div>"+
                    "</div>"+
                    "<img src='data:image/png;base64,"+ image2 +"' width='100%'/>"+
                    "<div class='caption'>"+
                                             "<h6><a onclick='newsClick("+ last_prev_id +")' href='#'>"+title2+"</a></h6>"+
                                            "<p>"+shortDescription2+"</p>"+
                                        "</div>"+
                    "</div>";
            var element =document.getElementById("news");
            element.innerHTML = result;
                }
                
     getFullNewsByIdView2(id)  {
        var data=this.getNewsById(id);
        var result="";
           var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date = new Date(data.date);           
           var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    //hour: 'numeric',
                    //minute: 'numeric'
                  };
            date = date.toLocaleString("ru", options);
            var image=data.image;
                            result +="<div class='container'>"+
                            ""+date+""+
                            "<h2>"+title+"</h2>"+
                            "<img src='data:image/png;base64,"+ image +"' class='img-fluid'>"+
                            "<div class='full-description'>"+
                            ""+fullDescription+""+
                            "</div>"+
                        "</div>"+
                        "<div class='container' id='social' style='margin-top: 40px'>"+
                            "<i class='fab fa-vk fa-3x'></i>    "+
                            "<i class='fab fa-facebook-square fa-3x'></i>    "+
                            "<i class='fab fa-odnoklassniki-square fa-3x' ></i>    "+
                            "<i class='fab fa-instagram fa-3x'></i>"+
                        "</div>";
        var element =document.getElementById("main-content");
        element.innerHTML = result;
    } 
    
    getNewsByIdView(id)  {
        var data=this.getNewsById(id);
        var data2 = this.getAllNews();
        var result="";
            var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date = new Date(data.date);           
           var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  };
            date = date.toLocaleString("ru", options);
            var image=data.image;
            result +="<div class='container-fluid news-blog'>"+
                    "<div class='row'>"+
                        "<div class='col-lg-12'>"+
                            "<div class='page-header'>"+
                                "<h1>Новости</h1>"+
                            "</div>"+
                            "<div class='col-sm-6 col-md-6'>"+
                                "<a onclick='newsClick("+ id  +")'>"+
                                    "<div class='thumbnail principal-post'>"+
                                        "<img src='data:image/png;base64,"+ image +"'/>"+
                                        "<div class='caption'>"+
                                            "<h2>"+title+"</h2>"+
                                            "<span class='date-of-post'>"+date+"</span>"+
                                            "<p>"+shortDescription+"</p>"+
                                        "</div>"+
                                    "</div>"+
                                "</a>"+
                            "</div>"+
                            "<div class='col-sm-6 col-md-6'>";
                    for(var j=1;j<data2.length;j++){
                        var id2 = data2[j].id;
                        var title2 = data2[j].title;
                        var date2 = new Date(data2[j].date);           
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        };
                        date2 = date.toLocaleString("ru", options);
                          result+="<div class='thumbnail' onclick='newsClick("+ id2  +")'>"+
                                    "<a href='#'>"+
                                        "<div class='caption'>"+
                                            "<h2>"+title2+"</h2>"+
                                            "<span class='date-of-post'>"+date2+"</span>"+
                                        "</div>"+
                                    "</a>"+
                                "</div>";}
                            result+="</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
        var element =document.getElementById("news");
        element.innerHTML = result;
    } 
    getFullNewsByIdView(id)  {
        var data=this.getNewsById(id);
        var result="";
           var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var date = new Date(data.date);           
           var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                  };
            date = date.toLocaleString("ru", options);
            var image=data.image;
             result +="<div class='container-fluid news-blog'>"+
                    "<div class='row'>"+
                        "<div class='col-lg-12'>"+
                            "<div class='page-header'>"+
                                "<h1>"+title+"</h1>"+
                            "</div>"+
                      "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                            "<p><img src='data:image/png;base64,"+ image +"' width='550' height='300' alt='"+title+"' align='left' style='margin-right: 15px;'>"+
                            "<div class='caption'>"+
                             "<h2>"+shortDescription+"</h2>"+
                              "<p>"+fullDescription+"</p>"+
                              "<p align='right'><h4>"+date+"</h4></p></p>"+
                            "</div>"+
                          
                        "</div>"+
                      "</div>";
        var element =document.getElementById("news");
        element.innerHTML = result;
    } 
    getAllNews()
    {
        return this.newsService.getAllNews();
    }
    
    //ViewController
    getAllNewsView()
    {
        var data=this.getAllNews();
        var result="";
        for(var i=0; i<data.length;i++)
        {
            var id=data[i].id;
            var title=data[i].title;
            var shortDescription=data[i].shortDescription;
            var fullDescription=data[i].fullDescription;
            var date=data[i].date;
            var image=data[i].image;
            result +=  "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail'>"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+shortDescription+"</p>"+
                              "<p align='right'>"+date+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        }

        var element =document.getElementById("news");
        element.innerHTML = result;
    }
}





