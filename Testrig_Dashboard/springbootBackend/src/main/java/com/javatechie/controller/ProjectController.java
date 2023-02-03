package com.javatechie.controller;

import com.javatechie.model.Project;
import com.javatechie.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    private ProjectService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject(@RequestBody @Valid Project project) {
        return service.addProject(project);
    }

    @GetMapping
    public List<Project> getProjects() {
        return service.findAllProjects();
    }

    @GetMapping("/{projectId}")
    public Project getProjectByProjectId(@PathVariable String projectId) {
        return service.getProjectByProjectId(projectId);
    }

    @GetMapping("/projectName/{projectName}")
    public Project getProjectByProjectName(@PathVariable String projectName) {
        return service.getProjectsByProjectName(projectName);
    }

    @DeleteMapping("/deleteProject/{projectId}")
    public String deleteProject(@PathVariable String projectId) {
        return service.deleteProject(projectId);
    }
}
