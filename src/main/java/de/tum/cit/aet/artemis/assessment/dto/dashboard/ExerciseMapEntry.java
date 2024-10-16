package de.tum.cit.aet.artemis.assessment.dto.dashboard;

import com.fasterxml.jackson.annotation.JsonInclude;

// Custom object for sql query
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public record ExerciseMapEntry(long exerciseId, long value) {
}
