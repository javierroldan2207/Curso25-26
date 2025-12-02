package com.ejerciciosIniciales.ejercicios.service;

import org.springframework.stereotype.Service;

@Service
public class ServiceCal {
	
	public Integer serviceCal(Integer num1,  Integer num2,  String select) throws Exception {
		Integer result = null;
			if(select.compareTo("sum") == 0) {
				result = num1 + num2;
			}
			
			if(select.compareTo("rest") == 0) {
				result = num1 - num2;
			}
			
			if(select.compareTo("mul") == 0) {
				result = num1 * num2;
			}
			
			if(select.compareTo("divi") == 0) {
				if(num2 != 0) {
					result = num1 / num2;
				}else {
					throw new Exception ("No puede ser 0 el dividendo.");
				}
			}
			
		return result;
	}

}
