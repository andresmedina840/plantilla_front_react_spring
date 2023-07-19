package com.generarwarfrontend.plantilla.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

public class AuthFilter {} /*extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		response.addHeader("Content-Security-Policy", "default-src 'self' ; script-src 'self' ; object-src 'self'");
		//response.addHeader("Strict-Transport-Security", "max-age=3153600 ; https://antecedentes.policia.gov.co:7005/agendamiento ; preload");
		
		
		filterChain.doFilter(request, response);
	}
}
*/