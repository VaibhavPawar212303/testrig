package com.javatechie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Document(collection = "build")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Build {
    @Transient
    public static final String SEQUENCE_NAME = "user_sequence";
    @Id
    private Integer buildId;
    @NotNull(message = "field must not be null")
    @NotEmpty(message = "a list field must not empty")
    private String buildName;
    private String buildDateAndTime;
    @NotNull(message = "field must not be null")
    @NotEmpty(message = "a list field must not empty")
    private String projectName;
    @NotNull(message = "field must not be null")
    private boolean fileUploadStatus;
    private String filePath;
}
