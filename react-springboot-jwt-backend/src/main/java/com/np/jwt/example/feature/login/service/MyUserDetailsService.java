package com.np.jwt.example.feature.login.service;


import com.np.jwt.example.feature.login.model.MyUser;
import com.np.jwt.example.feature.login.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class MyUserDetailsService implements UserDetailsService {

    private final MyUserRepository repository;

    @Autowired
    public MyUserDetailsService(MyUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        MyUser websiteUser = this.repository.findByUsername(name);

        if (websiteUser == null) {
            throw new UsernameNotFoundException(String.format("The username %s doesn't exist", name));
        }

        String[] roles = {websiteUser.getRole().name()};
        return new User(websiteUser.getUsername(), websiteUser.getPassword(),
                AuthorityUtils.createAuthorityList(roles));
    }

}