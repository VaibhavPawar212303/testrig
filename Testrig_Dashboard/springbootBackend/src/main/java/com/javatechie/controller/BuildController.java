package com.javatechie.controller;

import com.javatechie.model.Build;
import com.javatechie.service.BuildService;
import com.javatechie.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/build")
public class BuildController {
    @Autowired
    BuildService buildService;

    @Autowired
    ProjectService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Build createProject(@RequestBody @Valid Build build) {
        return buildService.addBuild(build);
    }

    @GetMapping("/projectId/{projectId}")
    public List<Build> getBuildsByProjectId(@PathVariable String projectId) {

        return buildService.getAllBuildsByProjectName(projectService.getProjectByProjectId(projectId).getProject_Name());
    }

    @GetMapping("/projectName/{projectName}")
    public List<Build> getBuildsByProjectName(@PathVariable String projectName) {
        return buildService.getAllBuildsByProjectName(projectName);
    }

    @GetMapping
    public List<Build> findAllBuild() {
        return buildService.findAllBuild();
    }

    @GetMapping("/buildId/{buildId}")
    public Build getBuildByBuildId(@PathVariable Integer buildId) {
        return buildService.getBuildByBuildId(buildId);
    }

    @GetMapping("/buildName/{buildName}")
    public List<Build> getBuildsByBuildName(@PathVariable String buildName) {
        return buildService.getAllBuildsByBuildName(buildName);
    }

    @GetMapping("/buildDate/{buildDate}")
    public List<Build> getBuildsByBuildDateAndTime(@PathVariable String buildDate) {
        return buildService.getAllBuildsByBuildDateAndTime(buildDate);
    }

    @GetMapping("/fileStatus/{fileStatus}")
    public List<Build> getBuildByFileStatus(@PathVariable boolean fileStatus) {
        return buildService.getAllBuildByFileStatus(fileStatus);
    }

    @DeleteMapping("/projectName/{projectName}")
    public String deleteByProjectName(@PathVariable String projectName) {
        return buildService.deleteByProjectName(projectName);
    }

    @DeleteMapping("/buildId/{buildId}")
    public String deleteByBuildId(@PathVariable Integer buildId) {
        return buildService.deleteByBuildId(buildId);
    }
}
