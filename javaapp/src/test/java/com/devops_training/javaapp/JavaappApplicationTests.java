package com.devops_training.javaapp;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devops_training.javaapp.web.controllers.ProductController;

import jakarta.inject.Inject;

@SpringBootTest
class JavaappApplicationTests {

	@Inject
	private ProductController clientController;

	@Test
	void contextLoads() {
		assertNotNull(clientController);
	}

}
