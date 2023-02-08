package com.javatechie.repository;

import com.javatechie.model.Build;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuildRepository extends MongoRepository<Build, Integer> {
    @Query("{ projectName: ?0 }")
    public List<Build> findAllProjectName(String projectName);

    @Query("{ buildName: ?0 }")
    public List<Build> findAllBuildName(String buildName);

    @Query("{ buildDateAndTime: ?0 }")
    public List<Build> findAllBuildDate(String buildDate);

    @Query("{ fileUploadStatus: ?0 }")
    public List<Build> findAllFileStatus(boolean fileStatus);

    public String deleteByProjectName(String projectName);

}
