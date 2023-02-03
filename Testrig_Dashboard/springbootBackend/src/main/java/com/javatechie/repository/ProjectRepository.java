package com.javatechie.repository;

import com.javatechie.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProjectRepository extends MongoRepository<Project, String> {

    @Query("{ project_Name: ?0 }")
    public Project findProjectName(String projectName);
}
