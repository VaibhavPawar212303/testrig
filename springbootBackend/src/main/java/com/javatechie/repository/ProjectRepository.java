package com.javatechie.repository;

import com.javatechie.Exception.ApiRequestException;
import com.javatechie.model.Project;
import com.javatechie.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface ProjectRepository extends MongoRepository<Project,String> {

    @Query("{ project_Name: ?0 }")
    public Project findProjectName(String projectName);
}
