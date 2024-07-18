package com.devops_training.javaapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devops_training.javaapp.domain.entities.Product;
import com.devops_training.javaapp.domain.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
