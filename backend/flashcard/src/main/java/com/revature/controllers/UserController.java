package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.User;
import com.revature.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserService us;

	@GetMapping(value = "/user/{userId}")
	public User getUserById(@PathVariable("userId") Integer id) {
		return us.getUserById(id);
	}

	@DeleteMapping(value = "/user/{userId}")
	public ResponseEntity<Void> deleteUser(@PathVariable("userId") Integer id) {
		User u = us.getUserById(id);
		us.deleteUser(u);
		return ResponseEntity.noContent().build();
	}
}
