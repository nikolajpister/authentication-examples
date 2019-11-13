package com.np.jwt.example.feature.jwttest;

import com.np.jwt.example.feature.login.model.MyUser;
import com.np.jwt.example.feature.login.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.endpoint.TokenEndpoint;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ResourceController {
    @Autowired
    private MyUserRepository repository;

    @Autowired
    private TokenEndpoint tokenEndpoint;

    @Autowired
    private TokenStore tokenStore;

    @GetMapping("/user")
    public MyUser getUser(@RequestParam String name) {
        return repository.findByUsername(name);
    }

    @GetMapping("/users")
    public List<MyUser> getUsers() {
        return repository.findAll();
    }

}
