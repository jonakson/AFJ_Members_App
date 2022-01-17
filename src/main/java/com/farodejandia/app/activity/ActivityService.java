package com.farodejandia.app.activity;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public void addActivity(Activity activity) {
        activityRepository.save(activity);
    }

    public void deleteActivity(Long activityId) {
        // TODO check if activity exists
        activityRepository.deleteById(activityId);
    }
}
