package com.javatechie.Exception;



import jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.ConstraintViolationException;
import java.net.ResponseCache;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Objects;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value={ApiRequestException.class})
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e){
        HttpStatus request=HttpStatus.BAD_REQUEST;
        ApiException apiException=new ApiException(e.getMessage(),
                request, ZonedDateTime.now(ZoneId.of("Z")));
        return new ResponseEntity<>(apiException, request);
    }
    @ExceptionHandler(value={ApiForbiddenException.class})
    public ResponseEntity<Object> handleApiForbiddenException(ApiForbiddenException e){
        HttpStatus request=HttpStatus.FORBIDDEN;
        ApiException apiException=new ApiException(e.getMessage(),
                request, ZonedDateTime.now(ZoneId.of("Z")));
        return new ResponseEntity<>(apiException, request);
    }
}
