package com.javatechie.service;

import com.javatechie.Exception.ApiForbiddenException;
import com.javatechie.Exception.ApiRequestException;
import com.javatechie.model.Project;
import com.javatechie.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project addProject(Project project){
        String projectName=project.getProject_Name();
        String projectId;
        if(Objects.isNull(repository.findProjectName(projectName))) {
            project.setProject_Id(UUID.randomUUID().toString().split("-")[0]);
            String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(Calendar.getInstance().getTime());
            project.setProject_createdDate(timeStamp);
            return repository.save(project);
        }
        else {
            projectId = repository.findProjectName(projectName).getProject_Id();
            return Optional.ofNullable(repository.findProjectName("")).orElseThrow(() -> new ApiForbiddenException("Project Name : " + projectName + " all ready exits. And ProjectId is " + projectId));
        }
    }

    public List<Project> findAllProjects() {
        return repository.findAll();
    }
    public Project getProjectByProjectId(String projectID){
            return repository.findById(projectID).orElseThrow(()-> new ApiRequestException("ProjectID :"+projectID+" doesn't exits."));
    }
    public Project getProjectsByProjectName(String projectName){
        return Optional.ofNullable(repository.findProjectName(projectName)).orElseThrow(()-> new ApiRequestException("Project Name : "+projectName+" doesn't exits."));
    }
    public String deleteProject(String projectId){
            getProjectByProjectId(projectId);
            repository.deleteById(projectId);
            return projectId + " task deleted from dashboard ";
    }
}
