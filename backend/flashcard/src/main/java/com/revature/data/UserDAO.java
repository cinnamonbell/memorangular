package com.revature.data;

import com.revature.beans.User;

public interface UserDAO {
	public User getUser(String username, String password);
	public User getUserById(int id);
	public void deleteUser(User u);
	public void updateUser(User u);
	public void addUser(User u);
}
