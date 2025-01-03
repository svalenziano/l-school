alter table stars add constraint spectraL_is_alphabetic check(spectral_type SIMILAR TO '[a-zA-Z]');
