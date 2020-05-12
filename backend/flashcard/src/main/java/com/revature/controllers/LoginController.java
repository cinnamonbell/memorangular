package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.LoginInfo;
import com.revature.beans.User;
import com.revature.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	@Autowired
	private UserService us;

	@GetMapping(value = "/login")
	public ResponseEntity<LoginInfo> login(HttpSession session) {
		LoginInfo l = (LoginInfo) session.getAttribute("loggedUser");
		if (l == null)
			return ResponseEntity.status(401).build();
		return ResponseEntity.ok(l);
	}

	@PostMapping(value = "/login")
	public ResponseEntity<LoginInfo> login(@RequestParam("user") String username, @RequestParam("pass") String password,
			HttpSession session) {
		User u = us.getUser(username, password);
		if (u == null) {
			return ResponseEntity.status(401).build();
		}
		LoginInfo loggedUser = new LoginInfo(u);
		session.setAttribute("loggedUser", loggedUser);
		return ResponseEntity.ok(loggedUser);
	}

	@PutMapping(value = "/login/{usersId}")
	public ResponseEntity<User> updateUser(@PathVariable("usersId") Integer id, @RequestBody User u) {
		us.updateUser(u);
		return ResponseEntity.ok(us.getUserById(id));
	}

	@DeleteMapping(value = "/login")
	public ResponseEntity<Void> logout(HttpSession session) {
		session.invalidate();
		return ResponseEntity.noContent().build();
	}
}
