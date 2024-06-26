package com.example.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Analyst {
  private Long id;
  private String firm;
  private String fullName;
  private double priceTarget;
  private String position;
}
