package com.farodejandia.app.activity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/activities")
public class ActivityController {

    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }

    @PostMapping
    public void addActivity(@RequestBody Activity activity) {
        activityService.addActivity(activity);
    }

    @DeleteMapping(path = "{activityId}")
    public void deleteActivity(@PathVariable("activityId") Long activityId) {
        activityService.deleteActivity(activityId);
    }

}
