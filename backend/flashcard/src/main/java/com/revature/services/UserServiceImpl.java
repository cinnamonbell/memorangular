package com.revature.services;

import org.springframework.stereotype.Service;

import com.revature.beans.User;
import com.revature.data.UserDAO;
import com.revature.data.UserDAOImpl;

@Service
public class UserServiceImpl implements UserService {
	private UserDAO ud = new UserDAOImpl();

	@Override
	public User getUser(String username, String password) {
		return ud.getUser(username, password);
	}

	@Override
	public User getUserById(int id) {
		return ud.getUserById(id);
	}

	@Override
	public void deleteUser(User u) {
		ud.deleteUser(u);
	}

	@Override
	public void updateUser(User u) {
		ud.updateUser(u);
	}

	@Override
	public void addUser(User u) {
		ud.addUser(u);
	}

}
