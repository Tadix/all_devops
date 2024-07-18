package com.devops_training.javaapp.services;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.devops_training.javaapp.domain.entities.Product;
import com.devops_training.javaapp.domain.repositories.ProductRepository;

public class ProductServiceTest {

    private ProductRepository productRepository = Mockito.mock(ProductRepository.class);

    final ProductService service = new ProductService(productRepository);

    @Test
    void testGetAllProducts() {

        // given
        final Product p1 = new Product(1L, "produit 1", 100.0f);
        final Product p2 = new Product(2L, "produit 2", 200.0f);

        final List<Product> expected = List.of(p1, p2);

        Mockito.when(productRepository.findAll()).thenReturn(expected);

        // when
        List<Product> result = service.getAllProducts();

        // then
        assertEquals(expected, result);

    }
}
