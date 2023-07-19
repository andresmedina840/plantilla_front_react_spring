package com.generarwarfrontend.plantilla.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {
	
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		return http
		.cors(cors -> cors.disable())
		.csrf(csrf -> csrf.disable())
		.sessionManagement(session -> {session.sessionCreationPolicy(SessionCreationPolicy.STATELESS);})
		.authorizeHttpRequests(auth -> {auth.antMatchers("/**").permitAll();
			auth.anyRequest().authenticated();})
		.headers(headers -> {
			headers.frameOptions(frameOptions -> frameOptions.sameOrigin());
			headers.httpStrictTransportSecurity(httpStrictTransportSecurity -> httpStrictTransportSecurity.includeSubDomains(true).preload(true).maxAgeInSeconds(3153600));
			headers.contentSecurityPolicy(csp -> csp.policyDirectives(
					"default-src 'self' https: ; script-src 'self' ; script-src-elem 'self' ; "
					+ "font-src 'self' ; img-src 'self' blob: data: ; style-src 'self' 'unsafe-inline' ; style-src-elem 'self' 'unsafe-inline' ;"
					+ "object-src 'self' ; connect-src 'self' ; frame-ancestors 'self' ; media-src 'self'"));
		}).build();
	}
}

