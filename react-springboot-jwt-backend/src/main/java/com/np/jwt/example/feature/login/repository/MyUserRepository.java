package com.np.jwt.example.feature.login.repository;

import com.np.jwt.example.feature.login.model.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface MyUserRepository extends JpaRepository<MyUser, Long> {

    MyUser findByUsername(String username);

}
