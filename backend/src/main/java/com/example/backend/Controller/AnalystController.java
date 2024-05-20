package com.example.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.Model.Analyst;
import com.example.backend.Service.AnalystService;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/analysts")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalystController {

    @Autowired
    private AnalystService analystService;

    @GetMapping
    public ResponseEntity<List<Analyst>> getAllAnalysts() {
        try {
            List<Analyst> analysts = analystService.getAllAnalysts();
            return ResponseEntity.ok(analysts);
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Analyst> getAnalystById(@PathVariable String id) {
        try {
            Analyst analyst = analystService.getAnalystById(id);
            return analyst != null ? ResponseEntity.ok(analyst) : ResponseEntity.notFound().build();
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PostMapping
    public ResponseEntity<String> createAnalyst(@RequestBody Analyst analyst) {
        try {
            String id = analystService.createAnalyst(analyst);
            return ResponseEntity.ok(id);
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateAnalyst(@PathVariable String id, @RequestBody Analyst analyst) {
        try {
            String updateTime = analystService.updateAnalyst(id, analyst);
            return ResponseEntity.ok(updateTime);
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAnalyst(@PathVariable String id) {
        try {
            String updateTime = analystService.deleteAnalyst(id);
            return ResponseEntity.ok(updateTime);
        } catch (ExecutionException | InterruptedException e) {
            return ResponseEntity.status(500).build();
        }
    }
}
