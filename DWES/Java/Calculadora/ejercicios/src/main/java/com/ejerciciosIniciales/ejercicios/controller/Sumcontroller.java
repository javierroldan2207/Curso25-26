package com.ejerciciosIniciales.ejercicios.controller;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ejerciciosIniciales.ejercicios.service.ServiceCal;

@Controller
public class Sumcontroller {
	@Autowired
	private ServiceCal serviceCal;

	@GetMapping("/operaciones")
	public String operaciones(@RequestParam Optional <Integer> num1, @RequestParam Optional <Integer> num2,@RequestParam Optional <String> select) throws Exception {
		try{
			if(num1.isPresent() && num2.isPresent() && select.isPresent()) {
				serviceCal.serviceCal(num1.get(), num2.get(), select.get());
			}
		}catch(Exception e) {
			throw new Exception ("Error");
		}
		
		return "operaciones";
		}
}
