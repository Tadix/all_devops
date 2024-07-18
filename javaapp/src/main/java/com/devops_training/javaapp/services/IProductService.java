package com.devops_training.javaapp.services;

import java.util.List;

import com.devops_training.javaapp.domain.entities.Product;

public interface IProductService {

    List<Product> getAllProducts();

}
