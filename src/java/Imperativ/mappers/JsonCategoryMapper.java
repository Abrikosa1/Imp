package Imperativ.mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import Imperativ.model.Category;
import org.codehaus.jackson.map.ObjectMapper;

/**
 *
 * @author Alex
 */
public class JsonCategoryMapper {
    
    public static String toJSON(Category category)
    {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json=mapper.writeValueAsString(category);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonCategoryMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
     public static String toJSON(List<Category> category)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json=mapper.writeValueAsString(category);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonCategoryMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    
    public static Category fromJSON(String json)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            Category category =mapper.readValue(json, Category.class);
            return category;
        } catch (IOException ex) {
            Logger.getLogger(JsonCategoryMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
