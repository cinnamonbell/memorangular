package com.revature.data;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.User;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

public class UserDAOImpl implements UserDAO {
	
	private HibernateUtil hu = HibernateUtil.getInstance();
	private Logger log = Logger.getLogger(UserDAOImpl.class);

	@Override
	public User getUser(String username, String password) {
		Session s = hu.getSession();
		String query = "FROM Users u where u.username = :username and u.pass = :pass";
		Query<User> q = s.createQuery(query, User.class);
		q.setParameter("username", username);
		q.setParameter("pass", password);
		User u = q.uniqueResult();
		s.close();
		return u;
	}

	@Override
	public User getUserById(int id) {
		Session s = hu.getSession();
		User u = s.get(User.class, id);
		s.close();
		return u;
	}

	@Override
	public void deleteUser(User u) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.delete(u);
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, UserDAOImpl.class);
		} finally {
			s.close();
		}
	}

	@Override
	public void updateUser(User u) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(u);
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, UserDAOImpl.class);
		} finally {
			s.close();
		}
	}

	@Override
	public void addUser(User u) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(u);
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, UserDAOImpl.class);
		} finally {
			s.close();
		}
	}

}
