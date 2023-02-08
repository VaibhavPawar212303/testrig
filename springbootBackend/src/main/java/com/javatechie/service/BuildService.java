package com.javatechie.service;

import com.javatechie.Exception.ApiRequestException;
import com.javatechie.controller.FileUploadController;
import com.javatechie.model.Build;
import com.javatechie.repository.BuildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class BuildService {

    @Autowired
    DbSequenceService dbSequenceService;
    @Autowired
    BuildRepository buildRepository;


    public Build addBuild(Build build) {
        build.setBuildId(dbSequenceService.getSequenceNumber(Build.SEQUENCE_NAME));
        String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(Calendar.getInstance().getTime());
        build.setBuildDateAndTime(timeStamp);
        return buildRepository.save(build);
    }

    public List<Build> findAllBuild() {
        return buildRepository.findAll();
    }

    public List<Build> getAllBuildsByProjectName(String projectName) {
        getBuildsByProjectName(projectName);
        return buildRepository.findAllProjectName(projectName);
    }

    public Build getBuildsByProjectName(String projectName) {
        return buildRepository.findAllProjectName(projectName).stream().findFirst().orElseThrow(() -> new ApiRequestException("Project Name doesn't exits or Empty"));
    }

    public Build getBuildByBuildId(Integer buildId) {
        return buildRepository.findById(buildId).orElseThrow(() -> new ApiRequestException("Build Id doesn't exits"));
    }

    public List<Build> getAllBuildsByBuildName(String buildName) {
        getBuildsByBuildName(buildName);
        return buildRepository.findAllBuildName(buildName);
    }

    public Build getBuildsByBuildName(String buildName) {
        return buildRepository.findAllBuildName(buildName).stream().findFirst().orElseThrow(() -> new ApiRequestException("Build Name doesn't exits"));
    }

    public List<Build> getAllBuildsByBuildDateAndTime(String buildDate) {
        getBuildsByBuildDateAndTime(buildDate);
        return buildRepository.findAllBuildDate(buildDate);
    }

    public Build getBuildsByBuildDateAndTime(String buildDate) {
        //
        return buildRepository.findAllBuildDate(buildDate).stream().findFirst().orElseThrow(() -> new ApiRequestException(" No data exits"));
    }

    public List<Build> getAllBuildByFileStatus(boolean fileStatus) {
        getBuildByFileStatus(fileStatus);
        return buildRepository.findAllFileStatus(fileStatus);
    }

    public Build getBuildByFileStatus(boolean fileStatus) {
        return buildRepository.findAllFileStatus(fileStatus).stream().findFirst().orElseThrow(() -> new ApiRequestException(" No data exits"));
    }

    public String deleteByProjectName(String projectName) {
        if (getBuildsByProjectName(projectName).isFileUploadStatus()) {
            int length = getAllBuildsByProjectName(projectName).size();
            if (length > 1) {
                for (int i = 1; i <= length; i++) {
                    FileUploadController.deleteFileService(getBuildsByProjectName(projectName).getFilePath());
                    buildRepository.deleteById(getBuildsByProjectName(projectName).getBuildId());
                }
            } else {
                FileUploadController.deleteFileService(getBuildsByProjectName(projectName).getFilePath());
                getBuildsByProjectName(projectName);
            }
        }
        buildRepository.deleteByProjectName(projectName);
        return "build's deleted from dashboard";
    }

    public String deleteByBuildId(Integer buildId) {
        getBuildByBuildId(buildId);
        buildRepository.deleteById(buildId);
        return "build deleted from dashboard";
    }
}
