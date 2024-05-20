package com.example.backend.Service;

import com.example.backend.Model.User;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User createUser(User user) throws FirebaseAuthException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(user.getEmail())
                .setPassword("password") // Set a default password or let the user set it
                .setDisabled(false);

        UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);

        user.setUid(userRecord.getUid());
        user.setEmail(userRecord.getEmail());
        user.setAdmin(true);
        // Save the user to your Firebase Firestore or Realtime Database if needed
        return user;
    }

    public void setAdmin(String uid) throws FirebaseAuthException {
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(uid)
                .setCustomClaims(Map.of("admin", true));

        FirebaseAuth.getInstance().updateUser(request);
    }
}
