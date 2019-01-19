/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Imperativ.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import Imperativ.model.News;

/**
 *
 * @author Alex
 */
public class Category {
    private int id;
    private String name;
    private List<News> news;

    public Category() {
    }

    public Category(int id, String name, List<News> news) {
        this.id = id;
        this.name = name;
        this.news = news;
    }

    public Category(int id, String name) {
        this.id = id;
        this.name = name;
        news = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<News> getNews() {
        return news;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 23 * hash + this.id;
        hash = 23 * hash + Objects.hashCode(this.name);
        hash = 23 * hash + Objects.hashCode(this.news);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Category other = (Category) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        // todo error equals
        if (!Objects.equals(this.news, other.news)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Category{" + "id=" + id + ", name=" + name + ", news=" + news + '}';
    }
    
    
    
    
}
