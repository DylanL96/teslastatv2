package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Service.UserService;
import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user) throws FirebaseAuthException {
        return userService.createUser(user);
    }

    @PostMapping("/{uid}/setAdmin")
    public void setAdmin(@PathVariable String uid) throws FirebaseAuthException {
        userService.setAdmin(uid);
    }
}
