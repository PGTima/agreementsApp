package com.example.demo.Repository;

import com.example.demo.Model.Agreement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AgreementsRepository extends JpaRepository<Agreement,Long> {
    Agreement findById(long id);
    List<Agreement> findByAgreementNumber(String agreementNumber);
    List<Agreement> findByClientId(long id );
    List<Agreement> findByAdressId(long id);
}
