/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Imperativ.controllers;

import java.util.List;
import Imperativ.DAL.NewsDal;
import Imperativ.model.News;


public class NewsController 
{
    protected NewsDal newsDal;
    public NewsController() 
    {
        newsDal = new NewsDal();
    }
    
    public List<News> getAllNews()
    {
        return newsDal.selectAll();
    }
    
    public News getNews(int id)
    {
        return newsDal.selectById(id);
    }
     
    public int insertNews(News news)
    {
        return newsDal.insert(news);
    }
      
    public int updateNews(News news)
    {
        return newsDal.update(news);
    }
    
    public int deleteNewsById(int id)
    {
        return newsDal.delete(id);
    }
            
    
}
