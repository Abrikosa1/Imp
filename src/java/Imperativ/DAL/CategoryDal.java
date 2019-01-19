package Imperativ.DAL;

import java.util.List;
import Imperativ.model.Category;
import org.apache.ibatis.session.SqlSession;


public class CategoryDal  extends BaseDal
{

    public CategoryDal() {
        super();
    }
    
     public List<Category> selectAll()
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         List<Category> list = session.selectList("category.selectAll");
         session.close();
         return list;
    }
    
    public Category selectById(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         Category category= session.selectOne("category.selectById",id);
         session.close();
         return category;
    }
    
    public int update(Category category)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.update("category.update",category);
         session.commit();
         session.close();
         return count;
    }
    
    public int insert(Category category)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.insert("category.insert",category);
         session.commit();
         session.close();
         return count;
    }
     
    public int delete(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.delete("category.deleteById",id);
         session.commit();
         session.close();
         return count;
    }
}
