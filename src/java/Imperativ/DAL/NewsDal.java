/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Imperativ.DAL;

import java.util.List;
import Imperativ.model.News;
import org.apache.ibatis.session.SqlSession;


public class NewsDal  extends BaseDal
{

    public NewsDal() {
        super();
    }
    
    public List<News> selectAll()
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         List<News> list = session.selectList("news.selectAll");
         session.close();
         return list;
    }
    
    public News selectById(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         News news= session.selectOne("news.selectById",id);
         session.close();
         return news;
    }
    
    public int update(News news)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.update("news.update",news);
         session.commit();
         session.close();
         return count;
    }
    
    public int insert(News news)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.insert("news.insert",news);
         session.commit();
         session.close();
         return count;
    }
     
    public int delete(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.delete("news.deleteById",id);
         session.commit();
         session.close();
         return count;
    }
}
