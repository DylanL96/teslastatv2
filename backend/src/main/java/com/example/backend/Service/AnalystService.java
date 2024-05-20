package com.example.backend.Service;

import com.example.backend.Model.Analyst;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class AnalystService {

    private static final String COLLECTION_NAME = "Analyst";

    public List<Analyst> getAllAnalysts() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COLLECTION_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        return documents.stream().map(document -> document.toObject(Analyst.class)).collect(Collectors.toList());
    }

    public Analyst getAnalystById(String id) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COLLECTION_NAME).document(id);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(Analyst.class);
        } else {
            return null;
        }
    }

    public String createAnalyst(Analyst analyst) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<DocumentReference> future = dbFirestore.collection(COLLECTION_NAME).add(analyst);
        return future.get().getId();
    }

    public String updateAnalyst(String id, Analyst analyst) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = dbFirestore.collection(COLLECTION_NAME).document(id).set(analyst);
        return future.get().getUpdateTime().toString();
    }

    public String deleteAnalyst(String id) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = dbFirestore.collection(COLLECTION_NAME).document(id).delete();
        return future.get().getUpdateTime().toString();
    }
}
