package io.julien.techaway.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Builder
@Table(name = "employee")
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "hire_date")
    private Instant hireDate;

    @Column(name = "salary")
    private Long salary;

    @Column(name = "commission_pct")
    private Long commissionPct;


    @OneToMany(mappedBy = "employee")
    private Set<Job> jobs;

    @ManyToOne
    @JsonIgnoreProperties("employees")
    private Employee manager;

    /**
     * Another side of the same relationship
     */
    @ManyToOne
    @JsonIgnoreProperties("employees")
    private Department department;

}
