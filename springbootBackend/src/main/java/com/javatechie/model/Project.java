package com.javatechie.model;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Document(collection = "projects")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    private String project_Id;
    @NotNull(message = "field must not be null")
    @NotEmpty(message = "a list field must not empty")
    private String project_Name;
    private String project_createdDate;
    @NotNull(message = "field must not be null")
    @NotEmpty(message = "a list field must not empty")
    private String project_Description;
}
