package com.javatechie.controller;

import com.javatechie.model.Build;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class FileUploadController {

    @Autowired
    BuildController buildController;
    private static String UPLOAD_FOLDER = System.getProperty("user.dir");

    @RequestMapping("/upload")
    public ModelAndView showUpload() {
        return new ModelAndView("upload");
    }

    @PostMapping("/upload")
    public ModelAndView fileUpload(@RequestParam("projectName") String projectName, @RequestParam("buildName") String buildName, @RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {

        byte[] bytes;
        Path path = null;
        Build build = new Build();
        if (file.isEmpty()) {
            return new ModelAndView("status", "message", "Please select a file and try again");
        }

        try {
            switch (file.getContentType().toLowerCase()) {
                case "video/mp4":
                    bytes = file.getBytes();
                    path = Paths.get(UPLOAD_FOLDER + "\\upload\\video\\" + file.getOriginalFilename());
                    Files.write(path, bytes);
                    break;
                case "text/html":
                    bytes = file.getBytes();
                    path = Paths.get(UPLOAD_FOLDER + "\\upload\\html\\" + file.getOriginalFilename());
                    Files.write(path, bytes);
                    break;
                case "image/png":
                    bytes = file.getBytes();
                    path = Paths.get(UPLOAD_FOLDER + "\\upload\\png\\" + file.getOriginalFilename());
                    Files.write(path, bytes);
                    break;
                case "image/jpg":
                    bytes = file.getBytes();
                    path = Paths.get(UPLOAD_FOLDER + "\\upload\\jpg\\" + file.getOriginalFilename());
                    Files.write(path, bytes);
                    break;
                default:
                    return new ModelAndView("status", "message", "Please check file format");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        build.setProjectName(projectName);
        build.setBuildName(buildName);
        build.setFileUploadStatus(true);
        build.setFilePath(String.valueOf(path));
        buildController.createProject(build);
        return new ModelAndView("status", "message", "File Uploaded successfully");
    }

    @PostMapping("/deleteFile")
    public static ModelAndView deleteFile(@RequestParam("filePath") String filePath) {
        return deleteFileService(filePath);
    }

    public static ModelAndView deleteFileService(String filePath) {
        File myObj = new File(filePath);
        if (myObj.delete())
            return new ModelAndView("status", "message", "File Deleted successfully");
        else
            return new ModelAndView("status", "message", "Failed to delete the file.");
    }
}
