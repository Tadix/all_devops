package com.devops_training.javaapp.web.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import com.devops_training.javaapp.domain.entities.Product;
import com.devops_training.javaapp.web.dtos.ProductDTO;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface IProductMapper {

    ProductDTO productToProductDTO(Product product);

}
